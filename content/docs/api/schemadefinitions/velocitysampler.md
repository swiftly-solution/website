---
title: VelocitySampler
---

# Interface VelocitySampler

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VelocitySampler.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface VelocitySampler : ISchemaClass<VelocitySampler>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<VelocitySampler>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### IdealSampleRate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VelocitySampler.cs#L22)

```csharp
ref float IdealSampleRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PrevSample

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VelocitySampler.cs#L18)

```csharp
ref Vector PrevSample { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### PrevSampleTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VelocitySampler.cs#L20)

```csharp
GameTime_t PrevSampleTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

