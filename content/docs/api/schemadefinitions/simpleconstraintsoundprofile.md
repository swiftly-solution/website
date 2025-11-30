---
title: SimpleConstraintSoundProfile
---

# Interface SimpleConstraintSoundProfile

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SimpleConstraintSoundProfile.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface SimpleConstraintSoundProfile : ISchemaClass<SimpleConstraintSoundProfile>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<SimpleConstraintSoundProfile>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### KeyPoints

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SimpleConstraintSoundProfile.cs#L20)

```csharp
ISchemaFixedArray<float> KeyPoints { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### Keypoints

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SimpleConstraintSoundProfile.cs#L18)

```csharp
ref SimpleConstraintSoundProfile__SimpleConstraintsSoundProfileKeypoints_t Keypoints { get; }
```

#### Property Value

- [SimpleConstraintSoundProfile__SimpleConstraintsSoundProfileKeypoints_t](/docs/api/schemadefinitions/simpleconstraintsoundprofile__simpleconstraintssoundprofilekeypoints_t)

### ReversalSoundThresholds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SimpleConstraintSoundProfile.cs#L22)

```csharp
ISchemaFixedArray<float> ReversalSoundThresholds { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

