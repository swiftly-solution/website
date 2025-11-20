---
title: CBoneConstraintPoseSpaceMorph
---

```csharp
public interface CBoneConstraintPoseSpaceMorph : CBoneConstraintBase, ISchemaClass<CBoneConstraintBase>, ISchemaClass<CBoneConstraintPoseSpaceMorph>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AttachmentName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneConstraintPoseSpaceMorph.cs#L20)

```csharp
string AttachmentName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### BoneName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneConstraintPoseSpaceMorph.cs#L18)

```csharp
string BoneName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Clamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneConstraintPoseSpaceMorph.cs#L26)

```csharp
ref bool Clamp { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InputList

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneConstraintPoseSpaceMorph.cs#L24)

```csharp
ref CUtlVector<CBoneConstraintPoseSpaceMorph__Input_t> InputList { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CBoneConstraintPoseSpaceMorph__Input_t](/docs/api/shared/schemadefinitions/cboneconstraintposespacemorph__input_t)>

### OutputMorph

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneConstraintPoseSpaceMorph.cs#L22)

```csharp
ref CUtlVector<CUtlString> OutputMorph { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

