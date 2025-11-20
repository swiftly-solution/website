---
title: FootStepTrigger
---

```csharp
public interface FootStepTrigger : ISchemaClass<FootStepTrigger>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### FootIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootStepTrigger.cs#L20)

```csharp
ref int FootIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Tags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootStepTrigger.cs#L18)

```csharp
ref CUtlVector<int> Tags { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### TriggerPhase

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootStepTrigger.cs#L22)

```csharp
ref StepPhase TriggerPhase { get; }
```

#### Property Value

- [StepPhase](/docs/api/shared/schemadefinitions/stepphase)

