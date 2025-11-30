---
title: CVirtualAnimParameter
---

# Interface CVirtualAnimParameter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVirtualAnimParameter.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CVirtualAnimParameter : CAnimParameterBase, ISchemaClass<CAnimParameterBase>, ISchemaClass<CVirtualAnimParameter>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CAnimParameterBase](/docs/api/schemadefinitions/canimparameterbase)
- [ISchemaClass<CAnimParameterBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CVirtualAnimParameter>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ExpressionString

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVirtualAnimParameter.cs#L18)

```csharp
string ExpressionString { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ParamType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVirtualAnimParameter.cs#L20)

```csharp
ref AnimParamType_t ParamType { get; }
```

#### Property Value

- [AnimParamType_t](/docs/api/schemadefinitions/animparamtype_t)

