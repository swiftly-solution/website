---
title: CNmBoneWeightList
---

# Interface CNmBoneWeightList

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmBoneWeightList.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CNmBoneWeightList : ISchemaClass<CNmBoneWeightList>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CNmBoneWeightList>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BoneIDs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmBoneWeightList.cs#L21)

```csharp
ref CUtlVector<CGlobalSymbol> BoneIDs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CGlobalSymbol](/docs/api/natives/cglobalsymbol)>

### SkeletonName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmBoneWeightList.cs#L19)

```csharp
SchemaUntypedField SkeletonName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### Weights

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmBoneWeightList.cs#L23)

```csharp
ref CUtlVector<float> Weights { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

