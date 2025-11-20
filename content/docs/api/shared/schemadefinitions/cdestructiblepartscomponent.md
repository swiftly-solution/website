---
title: CDestructiblePartsComponent
---

```csharp
public interface CDestructiblePartsComponent : ISchemaClass<CDestructiblePartsComponent>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DamageTakenByHitGroup

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePartsComponent.cs#L20)

```csharp
ref CUtlVector<ushort> DamageTakenByHitGroup { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### LastHitDamageLevel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePartsComponent.cs#L24)

```csharp
ref int LastHitDamageLevel { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Owner

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePartsComponent.cs#L22)

```csharp
ref CHandle<CBaseModelEntity> Owner { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseModelEntity](/docs/api/shared/schemadefinitions/cbasemodelentity)>

### __m_pChainEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePartsComponent.cs#L18)

```csharp
ref CNetworkVarChainer __m_pChainEntity { get; }
```

#### Property Value

- [CNetworkVarChainer](/docs/api/shared/natives/cnetworkvarchainer)

## Methods

### LastHitDamageLevelUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePartsComponent.cs#L27)

```csharp
void LastHitDamageLevelUpdated()
```

### OwnerUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePartsComponent.cs#L26)

```csharp
void OwnerUpdated()
```

