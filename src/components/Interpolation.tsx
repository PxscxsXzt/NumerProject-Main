import React from "react";
import { Box, Select, Text, AbsoluteCenter } from "@chakra-ui/react";
import Newton from "./layout/Interpolation/Newton";
import Lagrange from "./layout/Interpolation/Lagrange";
import Spline from "./layout/Interpolation/Spline";

function Interpolation() {
  const [solution, setSolution] = React.useState(" ");

  return (
    <>
      <Box textAlign="center" fontSize="xl" padding={5} position={"relative"}>
        <AbsoluteCenter p="4" color="white" axis="both">
          <Text fontSize="xl" fontWeight="bold" color="white">
            Solution
          </Text>
          <Select
            onChange={(e) => setSolution(e.target.value)}
            placeholder="Select Solution"
            color={"white"}
            padding={2}
            borderColor="gray.500"
            variant={"filled"}
          >
            <option value="Newton">Newton&apos;s Divided Difference</option>
            <option value="Langrange">Lagrange Interpolation</option>
            <option value="Spline">SPLINE Interpolation</option>
          </Select>
        </AbsoluteCenter>
      </Box>
      <Box mt={5}>{solution === "Newton" && <Newton />}</Box>
      <Box mt={5}>{solution === "Langrange" && <Lagrange />}</Box>
      <Box mt={5}>{solution === "Spline" && <Spline />}</Box>
    </>
  );
}

export default Interpolation;
