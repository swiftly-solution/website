---
title: C_OP_RepeatedTriggerChildGroup
---

```csharp
public interface C_OP_RepeatedTriggerChildGroup : CParticleFunctionPreEmission, CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<CParticleFunctionPreEmission>, ISchemaClass<C_OP_RepeatedTriggerChildGroup>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ChildGroupID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RepeatedTriggerChildGroup.cs#L18)

```csharp
ref int ChildGroupID { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ClusterCooldown

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RepeatedTriggerChildGroup.cs#L24)

```csharp
CParticleCollectionFloatInput ClusterCooldown { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### ClusterRefireTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RepeatedTriggerChildGroup.cs#L20)

```csharp
CParticleCollectionFloatInput ClusterRefireTime { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### ClusterSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RepeatedTriggerChildGroup.cs#L22)

```csharp
CParticleCollectionFloatInput ClusterSize { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### LimitChildCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RepeatedTriggerChildGroup.cs#L26)

```csharp
ref bool LimitChildCount { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

