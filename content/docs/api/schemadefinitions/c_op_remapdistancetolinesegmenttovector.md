---
title: C_OP_RemapDistanceToLineSegmentToVector
---

# Interface C_OP_RemapDistanceToLineSegmentToVector

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapDistanceToLineSegmentToVector.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface C_OP_RemapDistanceToLineSegmentToVector : C_OP_RemapDistanceToLineSegmentBase, CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_RemapDistanceToLineSegmentBase>, ISchemaClass<C_OP_RemapDistanceToLineSegmentToVector>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [C_OP_RemapDistanceToLineSegmentBase](/docs/api/schemadefinitions/c_op_remapdistancetolinesegmentbase)
- [CParticleFunctionOperator](/docs/api/schemadefinitions/cparticlefunctionoperator)
- [CParticleFunction](/docs/api/schemadefinitions/cparticlefunction)
- [ISchemaClass<CParticleFunction>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleFunctionOperator>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<C_OP_RemapDistanceToLineSegmentBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<C_OP_RemapDistanceToLineSegmentToVector>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### FieldOutput

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapDistanceToLineSegmentToVector.cs#L18)

```csharp
ParticleAttributeIndex_t FieldOutput { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/schemadefinitions/particleattributeindex_t)

### MaxOutputValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapDistanceToLineSegmentToVector.cs#L22)

```csharp
ref Vector MaxOutputValue { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### MinOutputValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RemapDistanceToLineSegmentToVector.cs#L20)

```csharp
ref Vector MinOutputValue { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

