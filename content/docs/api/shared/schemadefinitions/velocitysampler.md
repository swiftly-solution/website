---
title: VelocitySampler
---

```csharp
public interface VelocitySampler : ISchemaClass<VelocitySampler>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### IdealSampleRate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VelocitySampler.cs#L20)

```csharp
ref float IdealSampleRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PrevSample

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VelocitySampler.cs#L16)

```csharp
ref Vector PrevSample { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### PrevSampleTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VelocitySampler.cs#L18)

```csharp
GameTime_t PrevSampleTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

