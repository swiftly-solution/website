---
title: VMixOscDesc_t
---

# Interface VMixOscDesc_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VMixOscDesc_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface VMixOscDesc_t : ISchemaClass<VMixOscDesc_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<VMixOscDesc_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Freq

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VMixOscDesc_t.cs#L20)

```csharp
ref float Freq { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OscType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VMixOscDesc_t.cs#L18)

```csharp
ref VMixLFOShape_t OscType { get; }
```

#### Property Value

- [VMixLFOShape_t](/docs/api/schemadefinitions/vmixlfoshape_t)

### Phase

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VMixOscDesc_t.cs#L22)

```csharp
ref float Phase { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

