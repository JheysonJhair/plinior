import AppLayout from "../layouts/AppLayout";
import { Navigate } from "react-router-dom";

import { Users } from "../modules/user/pages/Users";
import { NewUser } from "../modules/user/pages/NewUser";
import ProtectedRoute from "../storage/ProtectedRoute";
import { Volunteers } from "../modules/volunteer/pages/Volunteers";
import { NewVolunteer } from "../modules/volunteer/pages/NewVolunteer";

import { NewHealthCenter } from "../modules/health-center/NewHealthCenter";
import { HealthCenters } from "../modules/health-center/HealthCenters";
import Reports from "../modules/reports/Reports";
import ShiftAvailability from "../modules/shiftAvailability/shiftAvailability";
import Evaluation from "../modules/evaluation/evaluation";
import Trainings from "../modules/trainings/trainings";
import ReportsAdmin from "../modules/reportsAdmin/ReportsAdmin";

const appRouter = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",

      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/new-user",
        element: <NewUser />,
      },
      {
        path: "/volunteers",
        element: <Volunteers />,
      },
      {
        path: "/new-volunteer",
        element: <NewVolunteer />,
      },
      {
        path: "/health-centers",
        element: <HealthCenters />,
      },
      {
        path: "/new-health-center",
        element: <NewHealthCenter />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },



      {
        path: "/ShiftAvailability",
        element: <ShiftAvailability />,
      },
      {
        path: "/Evaluation",
        element: <Evaluation />,
      },
      {
        path: "/Trainings",
        element: <Trainings />,
      },
      {
        path: "/ReportsAdmin",
        element: <ReportsAdmin />,
      },





    ],
  },
];

export default appRouter;
