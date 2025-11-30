---
title: CCSPlayer_WeaponServices
---

# Interface CCSPlayer_WeaponServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSPlayer_WeaponServices : CPlayer_WeaponServices, CPlayerPawnComponent, ISchemaClass<CPlayerPawnComponent>, ISchemaClass<CPlayer_WeaponServices>, ISchemaClass<CCSPlayer_WeaponServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CPlayer_WeaponServices](/docs/api/schemadefinitions/cplayer_weaponservices)
- [CPlayerPawnComponent](/docs/api/schemadefinitions/cplayerpawncomponent)
- [ISchemaClass<CPlayerPawnComponent>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPlayer_WeaponServices>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CCSPlayer_WeaponServices>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BlockInspectUntilNextGraphUpdate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L46)

```csharp
ref bool BlockInspectUntilNextGraphUpdate { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DisableAutoDeploy

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L40)

```csharp
ref bool DisableAutoDeploy { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsBeingGivenItem

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L34)

```csharp
ref bool IsBeingGivenItem { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsHoldingLookAtWeapon

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L22)

```csharp
ref bool IsHoldingLookAtWeapon { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsLookingAtWeapon

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L20)

```csharp
ref bool IsLookingAtWeapon { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsPickingUpGroundWeapon

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L42)

```csharp
ref bool IsPickingUpGroundWeapon { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsPickingUpItemWithUse

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L36)

```csharp
ref bool IsPickingUpItemWithUse { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NetworkAnimTiming

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L44)

```csharp
ref CUtlVector<byte> NetworkAnimTiming { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### NextAttack

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L18)

```csharp
GameTime_t NextAttack { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### PickedUpWeapon

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L38)

```csharp
ref bool PickedUpWeapon { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SavedWeapon

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L24)

```csharp
ref CHandle<CBasePlayerWeapon> SavedWeapon { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBasePlayerWeapon](/docs/api/schemadefinitions/cbaseplayerweapon)>

### TimeToMelee

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L26)

```csharp
ref int TimeToMelee { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TimeToPrimary

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L30)

```csharp
ref int TimeToPrimary { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TimeToSecondary

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L28)

```csharp
ref int TimeToSecondary { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TimeToSniperRifle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L32)

```csharp
ref int TimeToSniperRifle { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### BlockInspectUntilNextGraphUpdateUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L52)

```csharp
void BlockInspectUntilNextGraphUpdateUpdated()
```

### IsHoldingLookAtWeaponUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L50)

```csharp
void IsHoldingLookAtWeaponUpdated()
```

### IsLookingAtWeaponUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L49)

```csharp
void IsLookingAtWeaponUpdated()
```

### NetworkAnimTimingUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L51)

```csharp
void NetworkAnimTimingUpdated()
```

### NextAttackUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_WeaponServices.cs#L48)

```csharp
void NextAttackUpdated()
```

