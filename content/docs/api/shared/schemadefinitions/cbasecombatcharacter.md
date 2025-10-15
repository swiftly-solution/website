---
title: CBaseCombatCharacter
---

```csharp
public interface CBaseCombatCharacter : CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CBaseCombatCharacter>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ApplyStressDamage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCombatCharacter.cs#L23)

```csharp
ref bool ApplyStressDamage { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DeathEventsDispatched

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCombatCharacter.cs#L25)

```csharp
ref bool DeathEventsDispatched { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ForceServerRagdoll

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCombatCharacter.cs#L17)

```csharp
ref bool ForceServerRagdoll { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Hull

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCombatCharacter.cs#L31)

```csharp
ref Hull_t Hull { get; }
```

#### Property Value

- [Hull_t](/docs/api/shared/schemadefinitions/hull_t)

### ImpactEnergyScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCombatCharacter.cs#L21)

```csharp
ref float ImpactEnergyScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MovementStats

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCombatCharacter.cs#L35)

```csharp
CMovementStatsProperty MovementStats { get; }
```

#### Property Value

- [CMovementStatsProperty](/docs/api/shared/schemadefinitions/cmovementstatsproperty)

### MyWearables

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCombatCharacter.cs#L19)

```csharp
ref CUtlVector<CHandle<CEconWearable>> MyWearables { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CEconWearable](/docs/api/shared/schemadefinitions/ceconwearable)>>

### NavHullIdx

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCombatCharacter.cs#L33)

```csharp
ref uint NavHullIdx { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### StrRelationships

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCombatCharacter.cs#L29)

```csharp
string StrRelationships { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### VecRelationships

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCombatCharacter.cs#L27)

```csharp
ref CUtlVector<RelationshipOverride_t> VecRelationships { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[RelationshipOverride_t](/docs/api/shared/schemadefinitions/relationshipoverride_t)>

## Methods

### MyWearablesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseCombatCharacter.cs#L37)

```csharp
void MyWearablesUpdated()
```

