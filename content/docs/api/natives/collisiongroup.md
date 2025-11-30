---
title: CollisionGroup
---

# Enum CollisionGroup

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/RnQueryShapeAttr_t.cs#L6)

**Namespace**: [SwiftlyS2.Shared.Natives](/docs/api/natives)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public enum CollisionGroup : byte
```

## Fields

- **Always**: 0 - Default layer, always collides with everything.


- **BreakableGlass**: 9
- **ConditionallySolid**: 3 - Conditionally solid means that the collision response will be zero or as defined in the table when there are matching interactions


- **Debris**: 5 - Collides with nothing but world, static stuff and triggers


- **Default**: 4
- **Dissolving**: 19 - Things that are dissolving are in this group


- **DoorBlocker**: 17 - Blocks entities not permitted to get near moving doors


- **FirstUser**: 4 - First unreserved collision layer index.


- **InVehicle**: 13 - for any entity inside a vehicle


- **Interactive**: 7 - Collides with everything except interactive debris or debris


- **InteractiveDebris**: 6 - Collides with everything except other interactive debris or debris


- **LastSharedCollisionGroup**: 25
- **MaxAllowed**: 64
- **NPC**: 12 - Generic NPC group


- **NPCActor**: 21 - Used so NPCs in scripts ignore the player.


- **NPCScripted**: 22 - Used for NPCs in scripts that should not collide with each other


- **Nonphysical**: 1 - This is how you turn off all collisions for an object - move it to this group


- **PZClip**: 23
- **PassableDoor**: 18 - Doors that the player shouldn't collide with


- **Player**: 8
- **PlayerMovement**: 11 - For HL2, same as Collision_Group_Player, for TF2, this filters out other players and CBaseObjects


- **Projectile**: 16 - Projectiles!


- **Props**: 24
- **Pushaway**: 20 - Nonsolid on client and server, pushaway in player code


- **Trigger**: 2 - Trigger layer, never collides with anything, only triggers/interacts.  Use when querying for interaction layers.


- **Vehicle**: 10
- **VehicleClip**: 15 - vehicle clip brush to restrict vehicle movement


- **Weapon**: 14 - for any weapons that need collision detection



