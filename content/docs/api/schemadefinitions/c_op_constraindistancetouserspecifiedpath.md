---
title: C_OP_ConstrainDistanceToUserSpecifiedPath
---

# Interface C_OP_ConstrainDistanceToUserSpecifiedPath

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ConstrainDistanceToUserSpecifiedPath.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface C_OP_ConstrainDistanceToUserSpecifiedPath : CParticleFunctionConstraint, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionConstraint>, ISchemaClass<C_OP_ConstrainDistanceToUserSpecifiedPath>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CParticleFunctionConstraint](/docs/api/schemadefinitions/cparticlefunctionconstraint)
- [CParticleFunction](/docs/api/schemadefinitions/cparticlefunction)
- [ISchemaClass<CParticleFunction>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleFunctionConstraint>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<C_OP_ConstrainDistanceToUserSpecifiedPath>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### LoopedPath

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ConstrainDistanceToUserSpecifiedPath.cs#L24)

```csharp
ref bool LoopedPath { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaxDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ConstrainDistanceToUserSpecifiedPath.cs#L20)

```csharp
ref float MaxDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MinDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ConstrainDistanceToUserSpecifiedPath.cs#L18)

```csharp
ref float MinDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PointList

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ConstrainDistanceToUserSpecifiedPath.cs#L26)

```csharp
ref CUtlVector<PointDefinitionWithTimeValues_t> PointList { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointDefinitionWithTimeValues_t](/docs/api/schemadefinitions/pointdefinitionwithtimevalues_t)>

### TimeScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ConstrainDistanceToUserSpecifiedPath.cs#L22)

```csharp
ref float TimeScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

