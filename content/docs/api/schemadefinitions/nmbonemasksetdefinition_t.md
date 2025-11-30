---
title: NmBoneMaskSetDefinition_t
---

# Interface NmBoneMaskSetDefinition_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NmBoneMaskSetDefinition_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface NmBoneMaskSetDefinition_t : ISchemaClass<NmBoneMaskSetDefinition_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<NmBoneMaskSetDefinition_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NmBoneMaskSetDefinition_t.cs#L18)

```csharp
ref CGlobalSymbol ID { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/natives/cglobalsymbol)

### PrimaryWeightList

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NmBoneMaskSetDefinition_t.cs#L20)

```csharp
CNmBoneWeightList PrimaryWeightList { get; }
```

#### Property Value

- [CNmBoneWeightList](/docs/api/schemadefinitions/cnmboneweightlist)

### SecondaryWeightLists

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NmBoneMaskSetDefinition_t.cs#L22)

```csharp
ref CUtlLeanVector<CNmBoneWeightList, int> SecondaryWeightLists { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/natives/cutlleanvectortt)<[CNmBoneWeightList](/docs/api/schemadefinitions/cnmboneweightlist), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

