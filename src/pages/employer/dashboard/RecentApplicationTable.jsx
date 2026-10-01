import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import ApplicationTable from "../applications/ApplicationTable";
import { recent } from "./recentApplication";

const RecentApplicationTable = () => {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between py-2">
        <CardTitle>Recent Application</CardTitle>
        <Link to="/employer/applications">
          <Button variant="ghost">
            View All <ArrowRight />
          </Button>
        </Link>
      </CardHeader>
      <CardContent className="p-0">
        <ApplicationTable applications={recent} isFullMode={false} />
      </CardContent>
    </Card>
  );
};

export default RecentApplicationTable;
