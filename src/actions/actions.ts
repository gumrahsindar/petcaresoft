'use server'

import prisma from '@/lib/db'
import { sleep } from '@/lib/utils'
import { revalidatePath } from 'next/cache'

export async function addPet(pet) {
  await sleep(2000)

  try {
    await prisma.pet.create({
      data: pet,
    })
  } catch (error) {
    return {
      message: 'Could not add pet.',
    }
  }
  revalidatePath('/app', 'layout')
}

export async function updatePet(petId, newPetData) {
  await sleep(2000)

  try {
    await prisma.pet.update({
      where: {
        id: petId,
      },
      data: newPetData,
    })
  } catch (error) {
    return {
      message: 'Could not update pet.',
    }
  }
  revalidatePath('/app', 'layout')
}

export async function deletePet(id) {
  await sleep(2000)

  try {
    await prisma.pet.delete({
      where: {
        id,
      },
    })
  } catch (error) {
    return {
      message: 'Could not delete pet.',
    }
  }
  revalidatePath('/app', 'layout')
}
