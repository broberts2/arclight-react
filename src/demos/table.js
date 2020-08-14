import React, { useState } from "react";
import { Table } from "../components/index";

export default {
  Component: (
    <Table
      theme={"dark"}
      headCells={[
        {
          id: "name",
          numeric: false,
          disablePadding: true,
          label: "Dessert (100g serving)",
        },
        {
          id: "calories",
          numeric: true,
          disablePadding: false,
          label: "Calories",
        },
        { id: "fat", numeric: true, disablePadding: false, label: "Fat (g)" },
        {
          id: "carbs",
          numeric: true,
          disablePadding: false,
          label: "Carbs (g)",
        },
        {
          id: "protein",
          numeric: true,
          disablePadding: false,
          label: "Protein (g)",
        },
      ]}
      rows={[
        {
          name: "Doughnut",
          calories: 290,
          fat: 8.1,
          carbs: 32,
          protein: 6.8,
        },
        {
          name: "Pie",
          calories: 498,
          fat: 0.4,
          carbs: 59,
          protein: 4.9,
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
        },
        { name: "Twinkie", calories: 90, fat: 0.4, carbs: 59, protein: 4.9 },
        { name: "Jup", calories: 498, fat: 0.4, carbs: 59, protein: 4.9 },
        { name: "Yup", calories: 498, fat: 0.4, carbs: 59, protein: 4.9 },
        { name: "Si", calories: 498, fat: 0.4, carbs: 59, protein: 4.9 },
        { name: "Thing", calories: 498, fat: 0.4, carbs: 59, protein: 4.9 },
        { name: "Whatcha", calories: 498, fat: 0.4, carbs: 59, protein: 4.9 },
      ]}
    />
  ),
  Example: `
  import { Table } from "arclight-react";

  <Table
    theme={"dark"}
    headCells={[
      {
        id: "name",
        numeric: false,
        disablePadding: true,
        label: "Dessert (100g serving)",
      },
      {
        id: "calories",
        numeric: true,
        disablePadding: false,
        label: "Calories",
      },
      { id: "fat", numeric: true, disablePadding: false, label: "Fat (g)" },
      {
        id: "carbs",
        numeric: true,
        disablePadding: false,
        label: "Carbs (g)",
      },
      {
        id: "protein",
        numeric: true,
        disablePadding: false,
        label: "Protein (g)",
      },
    ]}
    rows={[
      {
        name: "Doughnut",
        calories: 290,
        fat: 8.1,
        carbs: 32,
        protein: 6.8,
      },
      {
        name: "Pie",
        calories: 498,
        fat: 0.4,
        carbs: 59,
        protein: 4.9,
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
      },
      { name: "Twinkie", calories: 90, fat: 0.4, carbs: 59, protein: 4.9 },
      { name: "Jup", calories: 498, fat: 0.4, carbs: 59, protein: 4.9 },
      { name: "Yup", calories: 498, fat: 0.4, carbs: 59, protein: 4.9 },
      { name: "Si", calories: 498, fat: 0.4, carbs: 59, protein: 4.9 },
      { name: "Thing", calories: 498, fat: 0.4, carbs: 59, protein: 4.9 },
      { name: "Whatcha", calories: 498, fat: 0.4, carbs: 59, protein: 4.9 },
    ]}
  />
  `,
};
