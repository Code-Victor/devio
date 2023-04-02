import React from "react";
import { BaseLayout } from "../Layout";
import { Button } from "../components";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckGithubUsername } from "../utils";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks";
import { GithubUser } from "../types";
import { databases, Server } from "../../appwrite.config";
import { Permission, Role } from "appwrite";
import { technologies } from "../components/Technologies";

const validationSchema = z.object({
  pageName: z.string().min(1, { message: "Page Name is required" }),
  short_bio: z.string().min(1, { message: "shortBio is required" }),
  large_bio: z.string().min(1, { message: "longBio is required" }),
  twitter_url: z.string().min(1, { message: "twitter is required" }),
  linkedin_url: z.string().min(1, { message: "linkedin is required" }),
  instagram_url: z.string().min(1, { message: "instagram is required" }),
  facebook_url: z.string().min(1, { message: "facebook is required" }),
});
type ValidationSchema = z.infer<typeof validationSchema>;

async function getUser(username: string) {
  const response = await fetch("https://api.github.com/users/" + username);
  const data = await response.json();
  return data as GithubUser;
}

function Details() {
  const { user, loading } = useAuth();
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const navigate = useNavigate();

  if (!loading && !user) {
    navigate("/login");
  }
  const [technologiesSelected, setTechnologiesSelected] = React.useState<
    typeof technologies[number][]
  >([]);
  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    //use appwrite to push to database
    if (user) {
      try {
        console.log("submitted");
        const githubUser = await getUser(user.name);
        const { pageName, ...withOutName } = data;
        await databases.createDocument(
          Server.databaseID,
          Server.collectionID,
          "unique()",
          {
            name: data.pageName,
            github_username: user.name,
            avatar_url: githubUser.avatar_url,
            tools: technologiesSelected,
            ...withOutName,
          },
          [Permission.write(Role.user(user["$id"]))]
        );
      } catch (e) {
        console.log("create error", e);
      }
    }
  };
  return (
    <BaseLayout>
      <div className="flex flex-col justify-center py-8">
        <div className="max-w-xl mx-auto">
          <h1 className="text-center text-3xl font-semibold text-white">
            Create account to start using Devio
          </h1>
          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            {/* Generate form for each value */}

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-white">
                Page Name
              </label>
              <input
                type="text"
                id="username"
                className="border border-gray-500 rounded-md p-2 bg-transparent text-white"
                {...register("pageName")}
              />
              {errors.pageName && (
                <p className="text-xs italic text-red-500 mt-2">
                  {" "}
                  {errors.pageName?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="short-bio" className="text-white">
                Short Bio
              </label>
              <input
                type="text"
                id="short-bio"
                className="border border-gray-500 rounded-md p-2 bg-transparent text-white"
                {...register("short_bio")}
              />
              {errors.short_bio && (
                <p className="text-xs italic text-red-500 mt-2">
                  {" "}
                  {errors.short_bio?.message}
                </p>
              )}
            </div>
            <div className="">
              <label className="text-white">Technologies</label>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => {
                  let isSelected = technologiesSelected.includes(tech);
                  return (
                    <button
                      key={tech}
                      onClick={() => {
                        if (isSelected) {
                          setTechnologiesSelected(
                            technologiesSelected.filter((t) => t !== tech)
                          );
                        } else {
                          setTechnologiesSelected([
                            ...technologiesSelected,
                            tech,
                          ]);
                        }
                      }}
                      className={
                        isSelected
                          ? "bg-gradient-to-tr from-gradientStart to-gradientEnd rounded-full text-xs px-2 py-1 text-white"
                          : "bg-gray-500 rounded-full text-xs px-2 py-1 text-white"
                      }
                    >
                      {tech}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="long-bio" className="text-white">
                login Bio
              </label>
              <input
                type="text"
                id="long-bio"
                className="border border-gray-500 rounded-md p-2 bg-transparent text-white"
                {...register("large_bio")}
              />
              {errors.large_bio && (
                <p className="text-xs italic text-red-500 mt-2">
                  {" "}
                  {errors.large_bio?.message}
                </p>
              )}
            </div>
            {(
              [
                "twitter_url",
                "instagram_url",
                "facebook_url",
                "linkedin_url",
              ] as const
            ).map((link) => {
              return (
                <div className="flex flex-col gap-2" key={link}>
                  <label htmlFor={`${link}-url`} className="text-white">
                    {link.replace("_url", "")} URL
                  </label>
                  <input
                    type="text"
                    id={`${link}-url`}
                    className="border border-gray-500 rounded-md p-2 bg-transparent text-white"
                    {...register(link)}
                  />
                  {errors[link] && (
                    <p className="text-xs italic text-red-500 mt-2">
                      {" "}
                      {errors[link]?.message}
                    </p>
                  )}
                </div>
              );
            })}
            <Button size="lg" full radii="md">
              Generate page
            </Button>
          </form>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Details;
