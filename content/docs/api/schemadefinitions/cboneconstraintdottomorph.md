---
title: CBoneConstraintDotToMorph
---

# Interface CBoneConstraintDotToMorph

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneConstraintDotToMorph.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBoneConstraintDotToMorph : CBoneConstraintBase, ISchemaClass<CBoneConstraintBase>, ISchemaClass<CBoneConstraintDotToMorph>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBoneConstraintBase](/docs/api/schemadefinitions/cboneconstraintbase)
- [ISchemaClass<CBoneConstraintBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBoneConstraintDotToMorph>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BoneName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneConstraintDotToMorph.cs#L18)

```csharp
string BoneName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MorphChannelName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneConstraintDotToMorph.cs#L22)

```csharp
string MorphChannelName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Remap

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneConstraintDotToMorph.cs#L24)

```csharp
ISchemaFixedArray<float> Remap { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### TargetBoneName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneConstraintDotToMorph.cs#L20)

```csharp
string TargetBoneName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

