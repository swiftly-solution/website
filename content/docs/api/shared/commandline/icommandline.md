---
title: ICommandLine
---

```csharp
public interface ICommandLine
```

## Properties

### CommandLine

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/CommandLine/ICommandLine.cs#L30)

```csharp
string CommandLine { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### HasParameters

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/CommandLine/ICommandLine.cs#L32)

```csharp
bool HasParameters { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ParameterCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/CommandLine/ICommandLine.cs#L13)

```csharp
int ParameterCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### GetParameterFloat(string, float)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/CommandLine/ICommandLine.cs#L28)

```csharp
float GetParameterFloat(string paramName, float defaultValue = 0)
```

#### Parameters

- **paramName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **defaultValue**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GetParameterInt(string, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/CommandLine/ICommandLine.cs#L23)

```csharp
int GetParameterInt(string paramName, int defaultValue = 0)
```

#### Parameters

- **paramName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **defaultValue**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetParameterString(string, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/CommandLine/ICommandLine.cs#L18)

```csharp
string GetParameterString(string paramName, string defaultValue = "")
```

#### Parameters

- **paramName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **defaultValue**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### HasParameter(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/CommandLine/ICommandLine.cs#L8)

```csharp
bool HasParameter(string paramName)
```

#### Parameters

- **paramName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

