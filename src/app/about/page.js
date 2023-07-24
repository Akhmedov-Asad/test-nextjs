import Link from "next/link"

const AboutPage = ({params}) => {
    console.log(params);
  return (
    <>
    <h2>About page</h2>

    <Link href='/about/1'>about 1</Link>
    <Link href='/about/2'>about 2</Link>
    </>
  )
}

export default AboutPage