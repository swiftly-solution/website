---
title: CCSPlayerController_InventoryServices
---

```csharp
public interface CCSPlayerController_InventoryServices : CPlayerControllerComponent, ISchemaClass<CPlayerControllerComponent>, ISchemaClass<CCSPlayerController_InventoryServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CurrentLoadoutHash

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L32)

```csharp
ref ulong CurrentLoadoutHash { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### EquippedPlayerSprayIDs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L30)

```csharp
ISchemaFixedArray<uint> EquippedPlayerSprayIDs { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### MusicID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L16)

```csharp
ref ushort MusicID { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### PersonaDataPublicCommendsFriendly

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L26)

```csharp
ref int PersonaDataPublicCommendsFriendly { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PersonaDataPublicCommendsLeader

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L22)

```csharp
ref int PersonaDataPublicCommendsLeader { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PersonaDataPublicCommendsTeacher

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L24)

```csharp
ref int PersonaDataPublicCommendsTeacher { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PersonaDataPublicLevel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L20)

```csharp
ref int PersonaDataPublicLevel { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PersonaDataXpTrailLevel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L28)

```csharp
ref int PersonaDataXpTrailLevel { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Rank

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L18)

```csharp
ISchemaFixedArray<MedalRank_t> Rank { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[MedalRank_t](/docs/api/shared/schemadefinitions/medalrank_t)>

### ServerAuthoritativeWeaponSlots

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L35)

```csharp
ref CUtlVector ServerAuthoritativeWeaponSlots { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

## Methods

### MusicIDUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L37)

```csharp
void MusicIDUpdated()
```

### PersonaDataPublicCommendsFriendlyUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L42)

```csharp
void PersonaDataPublicCommendsFriendlyUpdated()
```

### PersonaDataPublicCommendsLeaderUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L40)

```csharp
void PersonaDataPublicCommendsLeaderUpdated()
```

### PersonaDataPublicCommendsTeacherUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L41)

```csharp
void PersonaDataPublicCommendsTeacherUpdated()
```

### PersonaDataPublicLevelUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L39)

```csharp
void PersonaDataPublicLevelUpdated()
```

### PersonaDataXpTrailLevelUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L43)

```csharp
void PersonaDataXpTrailLevelUpdated()
```

### RankUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L38)

```csharp
void RankUpdated()
```

### ServerAuthoritativeWeaponSlotsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_InventoryServices.cs#L44)

```csharp
void ServerAuthoritativeWeaponSlotsUpdated()
```

