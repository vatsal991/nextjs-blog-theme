import { Button, Navbar } from "flowbite-react";
import { TextInput } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const NavbarComp = () => {
  const router = useRouter();
  const { search: searchQuery } = router.query;
  const [search, setSearch] = useState<any>(searchQuery || "");

  const SearchMovie = (e: Event) => {
    e.preventDefault();
    router.push(`/?search=${search}&page=1`);
  };

  return (
    <Navbar
      fluid
      rounded
      className="!bg-primary border-b border-b-graymain !rounded-none sticky top-0 z-50"
    >
      <Link href="/">
        <img src="/logo/navbar.png" className="w-[130px]" alt="" />
      </Link>
      <div className="md:order-2 flex md:hidden">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="Navbar-Items">
        <Link className="!text-graymain" href="/?category=Action&page=1">
          Action
        </Link>
        <Link className="!text-graymain" href="/?category=Adventure&page=1">
          Adventure
        </Link>
        <Link
          className="!text-graymain"
          href="/?category=Science Fiction&page=1"
        >
          Science Fiction
        </Link>
        <Link className="!text-graymain" href="/?category=Animation&page=1">
          Animation
        </Link>
        <Link className="!text-graymain" href="/?category=Comedy&page=1">
          Comedy
        </Link>
        <form
          onSubmit={(e: any) => SearchMovie(e)}
          className="max-w-md flex sm:w-full md:w-auto gap-3 mt-2 md:mt-0"
        >
          <TextInput
            id="search"
            placeholder="Search Movies"
            type="text"
            required
            className="w-full"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <Button type="submit" className="!bg-redmain">
            <BiSearch />
          </Button>
        </form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;
