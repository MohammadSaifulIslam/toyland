import websiteTitle from "../../Others/WebsiteTitle/WebsiteTitle";

const BlogPageHome = () => {
    websiteTitle('Toy Land | Blogs')
    return (
       <section className=" bg-[#e5f9ff] py-20 min-h-[calc(100vh-348px)] text-lg font-medium">
         <section className="my-container  md:w-2/3">
            <div className="section-title mb-10 text-center">
                <h3 className="text-3xl font-bold mb-5">Our Blogs</h3>
                <p className="font-medium">Dive into a world of articles written by toy experts, parenting gurus, and passionate contributors who share their expertise, tips, and experiences. </p>
            </div>

            <h3 className="text-2xl font-bold mb-5 text-[#12aee0]">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
            <p>
                <span className="font-semibold">Access token</span> is a secure string that a client uses to access protected resources. An instance issues access tokens to clients that have a valid authorization grant. Each access token has a specific scope, lifespan, and other attributes.
                By default, an instance issues access tokens with a 30-minute lifespan in the scenario where the instance is the OAuth provider. For third-party tokens, 30 days.
                <br />


            </p>
            <p className="mt-5">
                <span className="font-semibold">Refresh token</span> is a credential that a client uses to obtain new access tokens without requiring additional user authorization. An instance issues a refresh token to a client when it is first authorized to have an access token.
                By default, an instance issues refresh tokens with a 100-day lifespan in the scenario where the instance is the OAuth provider. For third-party tokens, 365 days.
            </p>
            <p className="mt-5">We can store access and refresh token on <span className="font-semibold">Localstorage</span> and <span className="font-semibold">HTTP Only Cookies</span>.
            </p>
            <div className="mt-10">
                <h3 className="text-2xl font-bold mb-5 text-[#12aee0]">Compare SQL between NoSQL databases.</h3>
                <p>
                    <span className="font-semibold">SQL</span> is stands for “Structured Query Language,” is the programming language that’s been widely used in managing data in relational database management systems (RDBMS) since the 1970s. In the early years, when storage was expensive, SQL databases focused on reducing data duplication.
                </p>
                <p>
                    <span className="font-semibold">NoSQL</span> is a non-relational database, meaning it allows different structures than a SQL database (not rows and columns) and more flexibility to use a format that best fits the data. The term “NoSQL” was not coined until the early 2000s. It doesn’t mean the systems don’t use SQL, as NoSQL databases do sometimes support some SQL commands. More accurately, “NoSQL” is sometimes defined as “not only SQL.”
                </p>
                <p className="text-xl font-bold mb-5 text-[#12aee0] mt-5">Some differences between SQL and NoSQL are</p>
                <ul className="">
                    <li>1. SQL databases are relational, and NoSQL databases are non-relational.
                    </li>
                    <li>2. SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                    <li>3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                    <li>4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                    <li>5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                </ul>
            </div>
            <div className="mt-10">
                <h3 className="text-2xl font-bold mb-5 text-[#12aee0]">What is Express js? What is Nest JS</h3>
                <p>
                    <span className="font-semibold">Express</span> is a minimal and flexible Node.js framework that provides a robust set of features for building web and mobile applications. It is a lightweight and unopinionated framework that allows developers to create applications with their preferred tools and libraries. Express is popular among developers due to its simplicity and ease of use.
                </p>
                <p className="mt-5">
                    <span className="font-semibold">Nest</span> is a progressive Node.js framework for building efficient, scalable, and reliable server-side applications. It is built on top of Express.js and provides a more structured way of building applications with TypeScript. NestJS uses a modular architecture, making it easy to maintain and scale applications as they grow.
                </p>
            </div>
            <div className="mt-10">
                <h3 className="text-2xl font-bold mb-5 text-[#12aee0]">What is MongoDB aggregate? and how does it work?</h3>
                <p>
                    <span className="font-semibold">Aggregation</span> is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                </p>
                <p className="mt-5">
                    In MongoDB, aggregation operations process the data records/documents and return computed results. It collects values from various documents and groups them together and then performs different types of operations on that grouped data like sum, average, minimum, maximum, etc to return a computed result. It is similar to the aggregate function of SQL.
                    <br />
                    <p className="text-xl font-bold mb-2 text-[#12aee0] mt-5">  MongoDB provides three ways to perform aggregation</p>
                  
                    <ul>
                        <li>1.Aggregation pipeline</li>
                        <li>2.Map-reduce function</li>
                        <li>3. Single-purpose aggregation</li>
                    </ul>
                </p>
            </div>
        </section>
       </section>
    );
};

export default BlogPageHome;