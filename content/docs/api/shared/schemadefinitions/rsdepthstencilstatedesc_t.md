---
title: RsDepthStencilStateDesc_t
---

```csharp
public interface RsDepthStencilStateDesc_t : ISchemaClass<RsDepthStencilStateDesc_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DepthFunc

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RsDepthStencilStateDesc_t.cs#L24)

```csharp
ref RsComparison_t DepthFunc { get; }
```

#### Property Value

- [RsComparison_t](/docs/api/shared/schemadefinitions/rscomparison_t)

### DepthTestEnable

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RsDepthStencilStateDesc_t.cs#L19)

```csharp
SchemaUntypedField DepthTestEnable { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### DepthWriteEnable

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RsDepthStencilStateDesc_t.cs#L22)

```csharp
SchemaUntypedField DepthWriteEnable { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### StencilState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RsDepthStencilStateDesc_t.cs#L26)

```csharp
RsStencilStateDesc_t StencilState { get; }
```

#### Property Value

- [RsStencilStateDesc_t](/docs/api/shared/schemadefinitions/rsstencilstatedesc_t)

