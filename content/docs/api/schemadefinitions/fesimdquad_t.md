---
title: FeSimdQuad_t
---

# Interface FeSimdQuad_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeSimdQuad_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface FeSimdQuad_t : ISchemaClass<FeSimdQuad_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<FeSimdQuad_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### F4Slack

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeSimdQuad_t.cs#L21)

```csharp
ref fltx4 F4Slack { get; }
```

#### Property Value

- [fltx4](/docs/api/natives/fltx4)

### F4Weights

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeSimdQuad_t.cs#L25)

```csharp
ISchemaFixedArray<fltx4> F4Weights { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[fltx4](/docs/api/natives/fltx4)>

### Node

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeSimdQuad_t.cs#L19)

```csharp
SchemaUntypedField Node { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### Shape

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeSimdQuad_t.cs#L23)

```csharp
ISchemaFixedArray<FourVectors> Shape { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[FourVectors](/docs/api/natives/fourvectors)>

