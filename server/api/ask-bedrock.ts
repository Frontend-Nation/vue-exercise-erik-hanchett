import { getCurrentUser } from "aws-amplify/auth/server";
import { runAmplifyApi } from "~/server/utils/amplifyUtils";
import { generateClient } from "aws-amplify/data";
import { Amplify } from "aws-amplify";
import { Schema } from "~/amplify/data/resource";
import outputs from "~/amplify_outputs.json";
Amplify.configure(outputs, { ssr: true });

export default defineEventHandler(async (event) => {
  const client = generateClient<Schema>();
  const { ingredients } = await readBody<{ ingredients: string }>(event);

  const response = await client.queries.askBedrock({
    ingredients: [ingredients],
  });

  const res = JSON.parse(response.data?.body!);
  const content = res.content[0].text;
  return content || "";
});
