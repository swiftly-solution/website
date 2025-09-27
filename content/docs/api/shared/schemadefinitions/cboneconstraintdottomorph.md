---
title: CBoneConstraintDotToMorph
---

```csharp
public interface CBoneConstraintDotToMorph : CBoneConstraintBase, ISchemaClass<CBoneConstraintBase>, ISchemaClass<CBoneConstraintDotToMorph>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**BoneName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneConstraintDotToMorph.cs#L16)

```csharp
ref CUtlString BoneName { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

**MorphChannelName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneConstraintDotToMorph.cs#L20)

```csharp
ref CUtlString MorphChannelName { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

**Remap** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneConstraintDotToMorph.cs#L22)

```csharp
ISchemaFixedArray<float> Remap { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

**TargetBoneName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneConstraintDotToMorph.cs#L18)

```csharp
ref CUtlString TargetBoneName { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

