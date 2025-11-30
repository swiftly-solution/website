---
title: CMorphData
---

# Interface CMorphData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphData.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMorphData : ISchemaClass<CMorphData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CMorphData>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### MorphRectDatas

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphData.cs#L20)

```csharp
ref CUtlVector<CMorphRectData> MorphRectDatas { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CMorphRectData](/docs/api/schemadefinitions/cmorphrectdata)>

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphData.cs#L18)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

