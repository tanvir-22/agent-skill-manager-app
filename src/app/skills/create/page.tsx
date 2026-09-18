"use client";
import { createSkill } from "@/actions/skill";
import React, { useActionState } from "react";

const initialState = {
  message: "",
  error: "",
};
const Createpage = () => {
  const [state, formAction, pending] = useActionState(
    createSkill,
    initialState,
  );
  return (
    <form
      action={formAction}
      className="mx-auto mt-10  w-full max-w-2xl space-y-5 rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6 md:p-8"
    >
      <div>
        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
          Create Skill
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Add a new skill to your collection.
        </p>
      </div>

      {/* Name */}
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Skill name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="e.g. React Development"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>

        <textarea
          id="description"
          name="description"
          rows={5}
          placeholder="Describe what this skill does..."
          className="w-full resize-y rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
      </div>

      {/* Category */}
      <div className="space-y-2">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category
        </label>

        <input
          id="category"
          name="category"
          type="text"
          placeholder="e.g. Programming"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {pending ? "Creating..." : "Create Skill"}
      </button>
      {state?.error ? <p className="text-red-500">{state.error}</p> : ""}
    </form>
  );
};

export default Createpage;
