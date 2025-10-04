---
title: CCSPlayer_WeaponServices
---

```csharp
public interface CCSPlayer_WeaponServices : CPlayer_WeaponServices, CPlayerPawnComponent, ISchemaClass<CPlayerPawnComponent>, ISchemaClass<CPlayer_WeaponServices>, ISchemaClass<CCSPlayer_WeaponServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**BlockInspectUntilNextGraphUpdate** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L44)

```csharp
ref bool BlockInspectUntilNextGraphUpdate { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**DisableAutoDeploy** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L38)

```csharp
ref bool DisableAutoDeploy { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**IsBeingGivenItem** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L32)

```csharp
ref bool IsBeingGivenItem { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**IsHoldingLookAtWeapon** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L20)

```csharp
ref bool IsHoldingLookAtWeapon { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**IsLookingAtWeapon** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L18)

```csharp
ref bool IsLookingAtWeapon { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**IsPickingUpGroundWeapon** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L40)

```csharp
ref bool IsPickingUpGroundWeapon { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**IsPickingUpItemWithUse** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L34)

```csharp
ref bool IsPickingUpItemWithUse { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**NetworkAnimTiming** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L42)

```csharp
ref CUtlVector<byte> NetworkAnimTiming { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

**NextAttack** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L16)

```csharp
GameTime_t NextAttack { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**PickedUpWeapon** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L36)

```csharp
ref bool PickedUpWeapon { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**SavedWeapon** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L22)

```csharp
ref CHandle<CBasePlayerWeapon> SavedWeapon { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBasePlayerWeapon](/docs/api/shared/schemadefinitions/cbaseplayerweapon)>

**TimeToMelee** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L24)

```csharp
ref int TimeToMelee { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**TimeToPrimary** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L28)

```csharp
ref int TimeToPrimary { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**TimeToSecondary** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L26)

```csharp
ref int TimeToSecondary { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**TimeToSniperRifle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L30)

```csharp
ref int TimeToSniperRifle { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

**BlockInspectUntilNextGraphUpdateUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L50)

```csharp
void BlockInspectUntilNextGraphUpdateUpdated()
```

**IsHoldingLookAtWeaponUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L48)

```csharp
void IsHoldingLookAtWeaponUpdated()
```

**IsLookingAtWeaponUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L47)

```csharp
void IsLookingAtWeaponUpdated()
```

**NetworkAnimTimingUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L49)

```csharp
void NetworkAnimTimingUpdated()
```

**NextAttackUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L46)

```csharp
void NextAttackUpdated()
```

