"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

import { currentUser } from "@/lib/auth";
import { OrganizationResponse } from "@/models/User";
import { CrossCircledIcon, GearIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const ServerPage = () => {
  const user = useCurrentUser();
  const [loading, setLoading] = useState(true);
  const [organizations, setOrganizations] = useState<OrganizationResponse[]>(
    []
  );

  useEffect(() => {
    setLoading(true);
    fetch("/api/organizations")
      .then((response) => response.json())
      .then((data) => {
        setOrganizations(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className=" flex flex-row gap-4 w-[90%]">
      <Card className=" w-[60%] h-fit ">
        <CardHeader>
          <p className="text-2xl font-semibold text-center">
            {" "}
            🏣 Your Organizations
          </p>
        </CardHeader>
        <CardContent className=" mt-8  flex flex-wrap gap-5  justify-around ">
          {/* <Card className="w-[32%] h-[145px] ">
            <CardHeader className="">
              <p className=" text-[22px] text-center font-semibold">ZopSmart</p>
            </CardHeader>
            <CardContent className="">
              <Button className="w-full" variant="default">
                View
              </Button>
            </CardContent>
          </Card> */}
          <Card className="w-[40%] h-[145px] mb-6 ">
            <CardHeader className="">
              <p className=" text-[22px] text-center font-semibold">ZopSmart</p>
            </CardHeader>
            <CardContent className="">
              <Button className="w-full" variant="default">
                View
              </Button>
            </CardContent>
          </Card>
          {/* <Card className="w-[40%] h-[145px] ">
            <CardHeader className="">
              <p className=" text-[22px] text-center font-semibold">ZopSmart</p>
            </CardHeader>
            <CardContent className="">
              <Button className="w-full" variant="default">
                View
              </Button>
            </CardContent>
          </Card>
          <Card className="w-[40%] h-[145px] ">
            <CardHeader className="">
              <p className=" text-[22px] text-center font-semibold">ZopSmart</p>
            </CardHeader>
            <CardContent className="">
              <Button className="w-full" variant="default">
                View
              </Button>
            </CardContent>
          </Card>
          <Card className="w-[40%] h-[145px] ">
            <CardHeader className="">
              <p className=" text-[22px] text-center font-semibold">ZopSmart</p>
            </CardHeader>
            <CardContent className="">
              <Button className="w-full" variant="default">
                View
              </Button>
            </CardContent>
          </Card> */}

          {loading && (
            <div className=" w-full flex justify-center  align-middle">
              <BeatLoader />
            </div>
          )}
          {!loading && organizations.length === 0 && (
            <p className=" text-center text-sm font-medium">
              No organizations found
            </p>
          )}
          {/* {!loading && (
            <>
              <div className=" flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <p className=" w-[80px] text-sm  font-medium">Name</p>
                <p className="  w-[120px]  text-sm  font-medium ">Manager</p>
                <p className=" w-[90px] text-sm font-medium">Members</p>
              </div>
              <div className=" flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <div className="w-full">
                  {organizations.map((organization) => (
                    <div
                      key={organization.id}
                      className=" flex w-full flex-row items-center justify-between  p-3"
                    >
                      <p className=" w-[80px] text-sm  font-medium">
                        {organization.name}
                      </p>
                      <p className=" w-[120px] text-sm  font-medium ">
                        {organization.manager.name}
                      </p>
                      <p className=" w-[80px] text-sm font-medium ">
                        <Button variant="link">View</Button>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )} */}
        </CardContent>
      </Card>
      <Card className=" w-[40%] h-[80vh]">
        <CardHeader></CardHeader>
        <CardContent className=" mt-8 space-y-6"></CardContent>
      </Card>
    </div>
  );
};

export default ServerPage;
