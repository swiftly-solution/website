---
title: CHintMessage
---

```csharp
public interface CHintMessage : ISchemaClass<CHintMessage>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Args

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHintMessage.cs#L20)

```csharp
ref CUtlVector<CString> Args { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CString](/docs/api/shared/natives/cstring)>

### Duration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHintMessage.cs#L22)

```csharp
ref float Duration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HintString

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHintMessage.cs#L18)

```csharp
string HintString { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

