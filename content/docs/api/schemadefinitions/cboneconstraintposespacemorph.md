---
title: CBoneConstraintPoseSpaceMorph
---

# Interface CBoneConstraintPoseSpaceMorph

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneConstraintPoseSpaceMorph.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBoneConstraintPoseSpaceMorph : CBoneConstraintBase, ISchemaClass<CBoneConstraintBase>, ISchemaClass<CBoneConstraintPoseSpaceMorph>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBoneConstraintBase](/docs/api/schemadefinitions/cboneconstraintbase)
- [ISchemaClass<CBoneConstraintBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBoneConstraintPoseSpaceMorph>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AttachmentName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneConstraintPoseSpaceMorph.cs#L20)

```csharp
string AttachmentName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### BoneName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneConstraintPoseSpaceMorph.cs#L18)

```csharp
string BoneName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Clamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneConstraintPoseSpaceMorph.cs#L26)

```csharp
ref bool Clamp { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InputList

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneConstraintPoseSpaceMorph.cs#L24)

```csharp
ref CUtlVector<CBoneConstraintPoseSpaceMorph__Input_t> InputList { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CBoneConstraintPoseSpaceMorph__Input_t](/docs/api/schemadefinitions/cboneconstraintposespacemorph__input_t)>

### OutputMorph

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneConstraintPoseSpaceMorph.cs#L22)

```csharp
ref CUtlVector<CUtlString> OutputMorph { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CUtlString](/docs/api/natives/cutlstring)>

