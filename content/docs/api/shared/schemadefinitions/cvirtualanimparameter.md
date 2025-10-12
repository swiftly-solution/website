---
title: CVirtualAnimParameter
---

```csharp
public interface CVirtualAnimParameter : CAnimParameterBase, ISchemaClass<CAnimParameterBase>, ISchemaClass<CVirtualAnimParameter>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ExpressionString

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVirtualAnimParameter.cs#L16)

```csharp
string ExpressionString { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ParamType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVirtualAnimParameter.cs#L18)

```csharp
ref AnimParamType_t ParamType { get; }
```

#### Property Value

- [AnimParamType_t](/docs/api/shared/schemadefinitions/animparamtype_t)

