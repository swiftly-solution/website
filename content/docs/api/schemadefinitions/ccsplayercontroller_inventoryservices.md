---
title: CCSPlayerController_InventoryServices
---

# Interface CCSPlayerController_InventoryServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSPlayerController_InventoryServices : CPlayerControllerComponent, ISchemaClass<CPlayerControllerComponent>, ISchemaClass<CCSPlayerController_InventoryServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CPlayerControllerComponent](/docs/api/schemadefinitions/cplayercontrollercomponent)
- [ISchemaClass<CPlayerControllerComponent>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CCSPlayerController_InventoryServices>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CurrentLoadoutHash

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L34)

```csharp
ref ulong CurrentLoadoutHash { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### EquippedPlayerSprayIDs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L32)

```csharp
ISchemaFixedArray<uint> EquippedPlayerSprayIDs { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### MusicID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L18)

```csharp
ref ushort MusicID { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### PersonaDataPublicCommendsFriendly

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L28)

```csharp
ref int PersonaDataPublicCommendsFriendly { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PersonaDataPublicCommendsLeader

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L24)

```csharp
ref int PersonaDataPublicCommendsLeader { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PersonaDataPublicCommendsTeacher

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L26)

```csharp
ref int PersonaDataPublicCommendsTeacher { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PersonaDataPublicLevel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L22)

```csharp
ref int PersonaDataPublicLevel { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PersonaDataXpTrailLevel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L30)

```csharp
ref int PersonaDataXpTrailLevel { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Rank

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L20)

```csharp
ISchemaFixedArray<MedalRank_t> Rank { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[MedalRank_t](/docs/api/schemadefinitions/medalrank_t)>

### ServerAuthoritativeWeaponSlots

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L36)

```csharp
ref CUtlVector<ServerAuthoritativeWeaponSlot_t> ServerAuthoritativeWeaponSlots { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ServerAuthoritativeWeaponSlot_t](/docs/api/schemadefinitions/serverauthoritativeweaponslot_t)>

## Methods

### MusicIDUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L38)

```csharp
void MusicIDUpdated()
```

### PersonaDataPublicCommendsFriendlyUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L43)

```csharp
void PersonaDataPublicCommendsFriendlyUpdated()
```

### PersonaDataPublicCommendsLeaderUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L41)

```csharp
void PersonaDataPublicCommendsLeaderUpdated()
```

### PersonaDataPublicCommendsTeacherUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L42)

```csharp
void PersonaDataPublicCommendsTeacherUpdated()
```

### PersonaDataPublicLevelUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L40)

```csharp
void PersonaDataPublicLevelUpdated()
```

### PersonaDataXpTrailLevelUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L44)

```csharp
void PersonaDataXpTrailLevelUpdated()
```

### RankUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L39)

```csharp
void RankUpdated()
```

### ServerAuthoritativeWeaponSlotsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L45)

```csharp
void ServerAuthoritativeWeaponSlotsUpdated()
```

