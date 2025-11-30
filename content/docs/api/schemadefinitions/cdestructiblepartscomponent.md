---
title: CDestructiblePartsComponent
---

# Interface CDestructiblePartsComponent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePartsComponent.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CDestructiblePartsComponent : ISchemaClass<CDestructiblePartsComponent>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CDestructiblePartsComponent>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DamageTakenByHitGroup

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePartsComponent.cs#L20)

```csharp
ref CUtlVector<ushort> DamageTakenByHitGroup { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### LastHitDamageLevel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePartsComponent.cs#L24)

```csharp
ref int LastHitDamageLevel { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Owner

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePartsComponent.cs#L22)

```csharp
ref CHandle<CBaseModelEntity> Owner { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseModelEntity](/docs/api/schemadefinitions/cbasemodelentity)>

### __m_pChainEntity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePartsComponent.cs#L18)

```csharp
ref CNetworkVarChainer __m_pChainEntity { get; }
```

#### Property Value

- [CNetworkVarChainer](/docs/api/natives/cnetworkvarchainer)

## Methods

### LastHitDamageLevelUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePartsComponent.cs#L27)

```csharp
void LastHitDamageLevelUpdated()
```

### OwnerUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePartsComponent.cs#L26)

```csharp
void OwnerUpdated()
```

