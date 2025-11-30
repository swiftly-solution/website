---
title: RsDepthStencilStateDesc_t
---

# Interface RsDepthStencilStateDesc_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RsDepthStencilStateDesc_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface RsDepthStencilStateDesc_t : ISchemaClass<RsDepthStencilStateDesc_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<RsDepthStencilStateDesc_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DepthFunc

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RsDepthStencilStateDesc_t.cs#L24)

```csharp
ref RsComparison_t DepthFunc { get; }
```

#### Property Value

- [RsComparison_t](/docs/api/schemadefinitions/rscomparison_t)

### DepthTestEnable

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RsDepthStencilStateDesc_t.cs#L19)

```csharp
SchemaUntypedField DepthTestEnable { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### DepthWriteEnable

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RsDepthStencilStateDesc_t.cs#L22)

```csharp
SchemaUntypedField DepthWriteEnable { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### StencilState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RsDepthStencilStateDesc_t.cs#L26)

```csharp
RsStencilStateDesc_t StencilState { get; }
```

#### Property Value

- [RsStencilStateDesc_t](/docs/api/schemadefinitions/rsstencilstatedesc_t)

