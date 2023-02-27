import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Dashboard = lazy(() => import('../screens/Dashboard'))
const BotDetails = lazy(() => import('../screens/BotDetails'))

export const AppRoutes = () => (
    <Suspense fallback={<span>Loading...</span>}>
        <Routes>
            <Route path="*" element={<Navigate to ="/" replace />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/bot/:shortName" element={<BotDetails />} />
        </Routes>
    </Suspense>
)