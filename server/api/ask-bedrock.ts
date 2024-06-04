import { generateClient } from "aws-amplify/data";
import { Amplify } from "aws-amplify";
import { Schema } from "~/amplify/data/resource";
import outputs from "~/amplify_outputs.json";
Amplify.configure(outputs, { ssr: true });

export default defineEventHandler(async (event) => {
  // Add code here to connect to data resource
});
