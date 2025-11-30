---
title: VMixDelayDesc_t
---

# Interface VMixDelayDesc_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VMixDelayDesc_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface VMixDelayDesc_t : ISchemaClass<VMixDelayDesc_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<VMixDelayDesc_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Delay

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VMixDelayDesc_t.cs#L22)

```csharp
ref float Delay { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DelayGain

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VMixDelayDesc_t.cs#L26)

```csharp
ref float DelayGain { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DirectGain

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VMixDelayDesc_t.cs#L24)

```csharp
ref float DirectGain { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EnableFilter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VMixDelayDesc_t.cs#L20)

```csharp
ref bool EnableFilter { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FeedbackFilter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VMixDelayDesc_t.cs#L18)

```csharp
VMixFilterDesc_t FeedbackFilter { get; }
```

#### Property Value

- [VMixFilterDesc_t](/docs/api/schemadefinitions/vmixfilterdesc_t)

### FeedbackGain

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VMixDelayDesc_t.cs#L28)

```csharp
ref float FeedbackGain { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Width

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VMixDelayDesc_t.cs#L30)

```csharp
ref float Width { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

