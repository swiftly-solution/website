---
title: FootStepTrigger
---

# Interface FootStepTrigger

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootStepTrigger.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface FootStepTrigger : ISchemaClass<FootStepTrigger>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<FootStepTrigger>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### FootIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootStepTrigger.cs#L20)

```csharp
ref int FootIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Tags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootStepTrigger.cs#L18)

```csharp
ref CUtlVector<int> Tags { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### TriggerPhase

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootStepTrigger.cs#L22)

```csharp
ref StepPhase TriggerPhase { get; }
```

#### Property Value

- [StepPhase](/docs/api/schemadefinitions/stepphase)

