---
title: ParamSpan_t
---

# Interface ParamSpan_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParamSpan_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface ParamSpan_t : ISchemaClass<ParamSpan_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<ParamSpan_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### EndCycle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParamSpan_t.cs#L26)

```csharp
ref float EndCycle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Param

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParamSpan_t.cs#L20)

```csharp
CAnimParamHandle Param { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)

### ParamType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParamSpan_t.cs#L22)

```csharp
ref AnimParamType_t ParamType { get; }
```

#### Property Value

- [AnimParamType_t](/docs/api/schemadefinitions/animparamtype_t)

### Samples

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParamSpan_t.cs#L18)

```csharp
ref CUtlVector<ParamSpanSample_t> Samples { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ParamSpanSample_t](/docs/api/schemadefinitions/paramspansample_t)>

### StartCycle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParamSpan_t.cs#L24)

```csharp
ref float StartCycle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

