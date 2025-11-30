---
title: CInButtonState
---

# Interface CInButtonState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInButtonState.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CInButtonState : ISchemaClass<CInButtonState>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CInButtonState>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ButtonChanged

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CInButtonState.cs#L9)

```csharp
GameButtonFlags ButtonChanged { get; set; }
```

#### Property Value

- [GameButtonFlags](/docs/api/events/gamebuttonflags)

### ButtonPressed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CInButtonState.cs#L7)

```csharp
GameButtonFlags ButtonPressed { get; set; }
```

#### Property Value

- [GameButtonFlags](/docs/api/events/gamebuttonflags)

### ButtonScroll

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CInButtonState.cs#L11)

```csharp
GameButtonFlags ButtonScroll { get; set; }
```

#### Property Value

- [GameButtonFlags](/docs/api/events/gamebuttonflags)

### ButtonStates

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInButtonState.cs#L18)

```csharp
ISchemaFixedArray<ulong> ButtonStates { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[ulong](https://learn.microsoft.com/dotnet/api/system.uint64)>

