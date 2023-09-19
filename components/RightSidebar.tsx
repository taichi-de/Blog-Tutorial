import Image from "next/image";
import Link from "next/link";
import { Text, Badge } from "@mantine/core";
import Icons from "./Icons";

const RightSidebar = () => {
  return (
    <div className="p-8 leading-loose text-center font-medium text-content bg-main w-full rounded-sm">
      <div className="pb-4 px-auto border border-third">
        <Text size="lg" className="bg-third text-main">
          Profile
        </Text>
        <Image
          className="my-4 mx-auto rounded-full"
          src="/coder-guy.jpg"
          width={120}
          height={120}
          alt="profile"
        />
        <h2 className="text-base my-2">Hi! I&apos;m Author!</h2>
        <Icons />
        <div className="text-left px-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eum.
          </p>
        </div>
      </div>
      <div className="my-4 pb-4 px-auto border border-third">
        <Text size="lg" className="bg-third text-main mb-2">
          Latest Posts
        </Text>
        <div className="text-left text-wrap px-4">
          <div className="hover:cursor-pointer hover:text-third">
            <span className="mr-2">&gt;</span>
            <Link href="/">
              Lorem ipsum dolor sit amet consectetur adipisicing ...
            </Link>
          </div>
        </div>
      </div>
      <div className="px-auto border border-third text-main">
        <Text size="lg" className="bg-third text-main mb-2">
          Tags
        </Text>
        <div className="flex flex-wrap pl-2 text-left over">
          <Badge className="bg-secondary rounded-full mb-2 mr-2 p-2 hover:bg-blue">
            <Text>All</Text>
          </Badge>
          <Badge className="bg-secondary rounded-full mb-2 mr-2 p-2 hover:bg-blue">
            No Tag
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
