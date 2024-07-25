-- CreateTable
CREATE TABLE "cook" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "cook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dish" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "desc" TEXT NOT NULL,
    "quantity" BOOLEAN NOT NULL,
    "available" BOOLEAN NOT NULL,
    "cookid" INTEGER NOT NULL,

    CONSTRAINT "dish_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cook_email_key" ON "cook"("email");

-- AddForeignKey
ALTER TABLE "dish" ADD CONSTRAINT "dish_cookid_fkey" FOREIGN KEY ("cookid") REFERENCES "cook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
