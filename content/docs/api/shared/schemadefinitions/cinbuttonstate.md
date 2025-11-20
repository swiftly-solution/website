---
title: CInButtonState
---

```csharp
public interface CInButtonState : ISchemaClass<CInButtonState>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ButtonChanged

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CInButtonState.cs#L9)

```csharp
GameButtonFlags ButtonChanged { get; set; }
```

#### Property Value

- [GameButtonFlags](/docs/api/shared/events/gamebuttonflags)

### ButtonPressed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CInButtonState.cs#L7)

```csharp
GameButtonFlags ButtonPressed { get; set; }
```

#### Property Value

- [GameButtonFlags](/docs/api/shared/events/gamebuttonflags)

### ButtonScroll

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CInButtonState.cs#L11)

```csharp
GameButtonFlags ButtonScroll { get; set; }
```

#### Property Value

- [GameButtonFlags](/docs/api/shared/events/gamebuttonflags)

### ButtonStates

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInButtonState.cs#L18)

```csharp
ISchemaFixedArray<ulong> ButtonStates { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[ulong](https://learn.microsoft.com/dotnet/api/system.uint64)>

