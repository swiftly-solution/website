---
title: RsRasterizerStateDesc_t
---

# Interface RsRasterizerStateDesc_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RsRasterizerStateDesc_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface RsRasterizerStateDesc_t : ISchemaClass<RsRasterizerStateDesc_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<RsRasterizerStateDesc_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CullMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RsRasterizerStateDesc_t.cs#L20)

```csharp
ref RsCullMode_t CullMode { get; }
```

#### Property Value

- [RsCullMode_t](/docs/api/schemadefinitions/rscullmode_t)

### DepthBias

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RsRasterizerStateDesc_t.cs#L26)

```csharp
ref int DepthBias { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DepthBiasClamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RsRasterizerStateDesc_t.cs#L28)

```csharp
ref float DepthBiasClamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DepthClipEnable

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RsRasterizerStateDesc_t.cs#L22)

```csharp
ref bool DepthClipEnable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FillMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RsRasterizerStateDesc_t.cs#L18)

```csharp
ref RsFillMode_t FillMode { get; }
```

#### Property Value

- [RsFillMode_t](/docs/api/schemadefinitions/rsfillmode_t)

### MultisampleEnable

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RsRasterizerStateDesc_t.cs#L24)

```csharp
ref bool MultisampleEnable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SlopeScaledDepthBias

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RsRasterizerStateDesc_t.cs#L30)

```csharp
ref float SlopeScaledDepthBias { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

