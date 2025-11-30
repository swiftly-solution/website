---
title: CBoneConstraintPoseSpaceBone__Input_t
---

# Interface CBoneConstraintPoseSpaceBone__Input_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneConstraintPoseSpaceBone__Input_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBoneConstraintPoseSpaceBone__Input_t : ISchemaClass<CBoneConstraintPoseSpaceBone__Input_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CBoneConstraintPoseSpaceBone__Input_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### InputValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneConstraintPoseSpaceBone__Input_t.cs#L18)

```csharp
ref Vector InputValue { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### OutputTransformList

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneConstraintPoseSpaceBone__Input_t.cs#L20)

```csharp
ref CUtlVector<CTransform> OutputTransformList { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CTransform](/docs/api/natives/ctransform)>

